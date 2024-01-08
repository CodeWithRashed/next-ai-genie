import SupportPage from "@/components/DashboardPages/support/SupportPage"
import { GetSupportData } from "@/helpers/getSupportRequest"

const SupportRequests = async () => {
  const supportData = await GetSupportData()


console.log(supportData)
  return (
    <div>
      <SupportPage supportData={supportData} />
    </div>
  )
}

export default SupportRequests
