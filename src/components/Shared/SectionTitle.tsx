interface TitleData {
  title: string,
  subtitle: string
}

const SectionTitle = ({title, subtitle}:TitleData) => {
  return (
    <div className="w-full text-center space-y-3">
      <h1 className="text-5xl text-color-title">{title}</h1>
      <h3 className="text-lg text-color-subtitle">{subtitle}</h3>
    </div>
  )
}

export default SectionTitle
