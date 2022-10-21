interface StatBarPropsType {
  label: string
  stat: number
  background: string
}

export default function StatBar({ label, stat, background }: StatBarPropsType) {
  const width = stat >= 100 ? 100 : stat

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-disabled capitalize">{label}</span>
        <span className="text-sm font-medium text-disabled">{stat}</span>
      </div>
      <div className="w-full rounded-full h-2.5 bg-gray-500">
        <div
          className={`h-2.5 rounded-full ${background}`}
          style={{
            background,
            width: `${width}%`
          }}
        />
      </div>
    </div>
  )
}