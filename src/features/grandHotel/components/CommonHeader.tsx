type CommonHeaderProps = {
  headingText: string
}

export default function CommonHeader({headingText}: CommonHeaderProps) {
  return (
    <div className='hotel__common-header'>
      <h1 className='hotel__common-heading'>{headingText}</h1>
      <div className='hotel__common-underlines'>
        <div className='hotel__common-underline--small'></div>
        <div className='hotel__common-underline--big'></div>
      </div>
    </div>
  );
}
