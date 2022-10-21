export interface BadgePropsType {
  label: string
  background: string
}

export default function Badge({ label, background }: BadgePropsType) {
  return (
    <span
      className="mr-2 inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium text-primary capitalize"
      style={{ background }}
    >
      {label}
    </span>
  )
}