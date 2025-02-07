import { colors } from '@eamj/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div style={{ backgroundColor: color, padding: '2rem' }} key={key}>
        <div
          style={{
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            display: 'flex',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
