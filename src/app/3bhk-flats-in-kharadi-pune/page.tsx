import FlatLanding from '@/components/flatlp/FlatLanding'
import { threeBhk } from '@/components/flatlp/data/threeBhk'

// Google Ads landing page. Standalone (no site nav), see STANDALONE_PATHS in LayoutShell.
export default function Page() {
  return <FlatLanding config={threeBhk} />
}
