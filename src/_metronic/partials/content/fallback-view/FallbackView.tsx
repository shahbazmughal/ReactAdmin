import {toAbsoluteUrl} from '../../../helpers'

export function FallbackView() {
  return (
    <div className='splash-screen'>
      <img src={toAbsoluteUrl('/thumb.png')} alt='Start logo' className="h-100px" />
      <span>Loading ...</span>
    </div>
  )
}
