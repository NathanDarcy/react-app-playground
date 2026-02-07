import { useState } from 'react'
import './fs-planner.css'

export default function FSPlanner() {
  type RoomType =
    | 'elevator'
    | 'small'
    | 'medium'
    | 'large'
    | 'wasteland'
    | 'vault-door'
    | 'unbuilt'

  type Room = {
    type: RoomType
    span: number
    col?: number
    label?: string
  }
  type Floor = Room[]
  type Vault = Floor[]

  const ROOM_SPANS: Record<RoomType, number> = {
    elevator: 1,
    small: 3,
    medium: 6,
    large: 9,
    wasteland: 3,
    'vault-door': 6,
    unbuilt: 3, // default
  }

  const floors: Vault = [
    [
      {
        type: 'wasteland',
        span: ROOM_SPANS.wasteland,
        label: 'Wasteland',
      },
      {
        type: 'vault-door',
        span: ROOM_SPANS['vault-door'],
        label: 'Vault Door',
      },
      {
        type: 'elevator',
        span: ROOM_SPANS.elevator,
        label: 'E',
      },
    ],
  ]
  const [vault, setVault] = useState<Vault>(floors)
  const [selectedRoomType, setSelectedRoomType] = useState<RoomType>('small')

  function expandFloor(floor: Floor): Room[] {
    const cells: Room[] = []
    let col = 1

    for (const room of floor) {
      cells.push({ ...room, col })
      col += room.span
    }

    while (col <= 26) {
      cells.push({
        type: 'unbuilt',
        span: 1,
        col,
        label: '',
      })
      col += 1
    }

    return cells
  }

  const TOTAL_FLOORS = 25

  const expandedVault: Vault = Array.from({ length: TOTAL_FLOORS }, (_, i) =>
    expandFloor(vault[i] ?? []),
  )

  function buildRoom(roomType: RoomType, floorIndex: number, col: number) {
    if (roomType !== 'unbuilt') {
      return
    }
    setVault((prev) => {
      const copy = structuredClone(prev)
      if (!copy[floorIndex]) copy[floorIndex] = []
      const type = selectedRoomType
      const span = ROOM_SPANS[type]
      copy[floorIndex].push({
        type,
        span,
        col,
        label: type === 'elevator' ? 'E' : type.replace('-', ' '),
      })
      return copy
    })
  }

  return (
    <div className='FSPlanner'>
      <h1 className='FSPlanner__header'>FS Planner</h1>

      <div style={{ marginBottom: '1rem' }}>
        <label>Build room type: </label>
        <select
          value={selectedRoomType}
          onChange={(e) => setSelectedRoomType(e.target.value as RoomType)}
        >
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
          <option value='elevator'>Elevator</option>
          <option value='wasteland'>Wasteland</option>
          <option value='vault-door'>Vault Door</option>
        </select>
      </div>

      <div className='FSPlanner__vault'>
        {expandedVault.map((floor, floorIndex) => (
          <div key={floorIndex} className='FSPlanner__floor'>
            {floor.map((room, roomIndex) => (
              <div
                key={roomIndex}
                onClick={() => {
                  buildRoom(room.type, floorIndex, room.col!)
                }}
                className={`FSPlanner__room FSPlanner__room--${room.type}`}
                style={{
                  gridColumn: `${room.col} / span ${room.span}`,
                  gridRow: floorIndex + 1,
                }}
              >
                {room.label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
