import React from 'react';
import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

const Sparked = ({ color, id, type, height, width, data, currentColor }) => {
  return (
    <>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        type={type}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        dataSource={data}
        xName="xval"
        yName="yval"
        tooltipSettings={{
          visible: true,
          format: '${xval} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </>
  );
};

export default Sparked;
