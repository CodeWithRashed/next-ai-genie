interface CardProps {
  title: string,
  data: any
}
const DashboardDataCard = ({title, data}:CardProps) => {

  return (
    <div>
       <div className="shadow-md p-5 rounded-main bg-white">
          <p>{title}</p>
          <p className="text-5xl my-5 font-bold text-color-primary">{data || '-'}</p>
        </div>
    </div>
  )
}

export default DashboardDataCard
