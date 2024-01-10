import SupportPage from "@/components/DashboardPages/support/SupportPage"
import { GetSupportData } from "@/helpers/getSupportRequest"

const SupportRequests = async () => {
  let supportData:any = await GetSupportData()


  return (
    <div>
      <SupportPage supportData={supportData}/>
    </div>
  )
}

export default SupportRequests
