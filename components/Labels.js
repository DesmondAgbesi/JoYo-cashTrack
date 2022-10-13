import React from 'react'


const trnsc=[{
  type: 'Income',
  color: '#a9c24f',
  percent: 40,
},
{
  type: 'Expenses',
  color: '#f9c74f',
  percent: 45,
},

]

function Labels() {
  return (
    <>
    {
    trnsc.map((v, i)=>{
      return <LabelComponent key={i} data={v}/>}
    )}
    </>
  )
}

function LabelComponent({ data }){
  if(!data) return <></>;

  return(
    <div className='labels flex justify-between'>
        <div className='flex gap-2'>
          <div className="h-2 w-2 py-3 rounded" style={{background: data.color ?? '#f9c74f'}}></div>
          <h3 className='text-md'>{data.type ?? ''}</h3>
        </div>
      <h3 className='font-bold'>{data.percent ?? 0}%</h3>

    </div>
  )
}

export default Labels