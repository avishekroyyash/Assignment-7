import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { SocialContex } from '../../Contex/ContextProvider';



const Stats = () => {
       const value1 = useContext(SocialContex)
        const socialTypeData = value1.social
        const callCount = socialTypeData.filter(item => item.click === 'Call' ).length
         const textCount = socialTypeData.filter(item => item.click === 'Text' ).length
          const videoCount = socialTypeData.filter(item => item.click === 'Video' ).length
        console.log(socialTypeData,'click on data ')
        const data = [
  { name: 'Text', value: textCount, fill: '#0088FE' },
  { name: 'Call', value: callCount, fill: '#00C49F' },
  { name: 'Video', value: videoCount, fill: '#FFBB28' },
];
    return (
        <div>
            <h1 className='text-5xl font-bold mt-10 mb-10 max-w-277.5 mx-auto'>Friendship Analytics</h1>

            {/* chart  */}

            <div className='max-w-277.5 mx-auto mb-15'>
                <h2 className='text-2xl text-green-900 font-medium mb-15'>By Interaction Type</h2>
                 <PieChart className='md:ml-[160px] lg:ml-[300px] ' style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1  }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
     <Legend></Legend>
     <Tooltip></Tooltip>
    </PieChart>
            </div>



        </div> 
    );
};

export default Stats;