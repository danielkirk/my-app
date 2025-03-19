import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/jiggle')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='w-full max-w-3xl mx-auto border-slate-500/30 border rounded-2xl'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
      <Button className='text-xs hover:shadow-md rounded-2xl bg-transparent' 
        onClick={() => console.log('hello button')}>
        Determinants
      </Button>
      <Button className='text-xs hover:shadow-md rounded-2xl bg-transparent' 
        onClick={() => console.log('hello button')}>
        Interventions
      </Button>
      <Button className='text-xs hover:shadow-md rounded-2xl bg-transparent' 
        onClick={() => console.log('hello button')}>
        Medications
      </Button>
      <Button className='text-xs font-sm hover:text-red-600 rounded-2xl bg-white border-white border-0' 
        onClick={() => console.log('clear filters')}>
        Clear filters 
      </Button>
    </div>
  </div>
}
