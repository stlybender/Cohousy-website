import FlatLanding from '@/components/flatlp/FlatLanding'
import { twoBhk } from '@/components/flatlp/data/twoBhk'

// Google Ads landing page. Standalone (no site nav), see STANDALONE_PATHS in LayoutShell.
export default function Page() {
  return <FlatLanding config={twoBhk} />
}
