// src/components/UzbekistanMap.jsx
import { VectorMap } from 'react-jvectormap';

const UzbekistanMap = () => {
  const mapData = {
    UZ: 100000, // Example data for Uzbekistan
  };

  return (
    <div>
      <h1>Uzbekistan Map</h1>
      <VectorMap
        map="world_mill"
        backgroundColor="#ffffff"
        containerStyle={{
          width: '100%',
          height: '500px',
        }}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: '#e4e4e4',
            'fill-opacity': 1,
            stroke: 'none',
            'stroke-width': 0,
            'stroke-opacity': 1,
          },
          hover: {
            'fill-opacity': 0.8,
            cursor: 'pointer',
          },
          selected: {
            fill: '#2938bc', // color for the selected region
          },
          selectedHover: {},
        }}
        regionsSelectable={true}
        series={{
          regions: [
            {
              values: mapData,
              scale: ['#C8EEFF', '#0071A4'],
              normalizeFunction: 'polynomial',
            },
          ],
        }}
      />
    </div>
  );
};

export default UzbekistanMap;
