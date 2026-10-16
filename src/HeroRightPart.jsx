
import React from 'react';
import HRPContent from './HRPContent';

function HeroRightPart() {
  let imgs = [
    { img: "https://i.pinimg.com/736x/84/b9/f5/84b9f59473d6f088fddb1c5c37f06556.jpg" },
    { img: "https://i.pinimg.com/1200x/5f/c2/6f/5fc26fd8b39bdb3379784df7a6a345ff.jpg" },
    { img: "https://i.pinimg.com/736x/a3/54/0f/a3540f5180f6694382022c167e0405f7.jpg" },
    { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600" },
    { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600" },
    { img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600" },
    { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600" },
    { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600" },
    { img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600" },
    { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600" },
    { img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600" },
    { img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600" },
    { img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600" },
    { img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600" },
    { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600" }
  ];

  return (
    <div className="h-full w-[70%] flex flex-nowrap gap-5 p-5 overflow-x-auto overflow-y-hidden">
      {imgs.map((elem, idx) => (
        <HRPContent imgs={elem} idx={idx} key={idx} />
      ))}
    </div>
  );
}

export default HeroRightPart;
