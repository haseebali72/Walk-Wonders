import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const data = [
    {
      "id": 1,
      "name": "Nike React Infinity Run Flyknit",
      "brand": "NIKE",
      "gender": "MEN",
      "category": "RUNNING",
      "price": 160,
      "is_in_inventory": true,
      "items_left": 3,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      "slug": "nike-react-infinity-run-flyknit"
    },
    {
      "id": 2,
      "name": "Nike React Miler",
      "brand": "NIKE",
      "gender": "MEN",
      "category": "RUNNING",
      "price": 130,
      "is_in_inventory": true,
      "items_left": 3,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",
      "slug": "nike-react-miler"
    },
    {
      "id": 3,
      "name": "Nike Air Zoom Pegasus 37",
      "brand": "NIKE",
      "gender": "WOMEN",
      "category": "RUNNING",
      "price": 120,
      "is_in_inventory": true,
      "items_left": 3,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
      "slug": "nike-air-zoom-pegasus-37"
    },
    {
      "id": 4,
      "name": "Nike Joyride Run Flyknit",
      "brand": "NIKE",
      "gender": "WOMEN",
      "category": "RUNNING",
      "price": 180,
      "is_in_inventory": true,
      "items_left": 3,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
      "slug": "nike-joyride-run-flyknit"
    },
    {
      "id": 5,
      "name": "Nike Mercurial Vapor 13 Elite FG",
      "brand": "NIKE",
      "gender": "WOMEN",
      "category": "FOOTBALL",
      "price": 250,
      "is_in_inventory": true,
      "items_left": 3,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",
      "slug": "nike-mercurial-vapor-13-elite-fg"
    },
    {
      "id": 6,
      "name": "Nike Phantom Vision Elite Dynamic Fit FG",
      "brand": "NIKE",
      "gender": "WOMEN",
      "category": "FOOTBALL",
      "price": 150,
      "is_in_inventory": true,
      "items_left": 3,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg",
      "slug": "nike-phantom-vision-elite-dynamic-fit-fg"
    },
    {
      "id": 7,
      "name": "Nike Phantom Venom Academy FG",
      "brand": "NIKE",
      "gender": "WOMEN",
      "category": "FOOTBALL",
      "price": 80,
      "is_in_inventory": true,
      "items_left": 3,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/whegph8z9ornhxklc8rp/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg",
      "slug": "nike-phantom-venom-academy-fg"
    },
    {
      "id": 8,
      "name": "Nike Mercurial Vapor 13 Elite Tech Craft FG",
      "brand": "NIKE",
      "gender": "MEN",
      "category": "FOOTBALL",
      "price": 145,
      "is_in_inventory": true,
      "items_left": 3,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg",
      "slug": "nike-mercurial-vapor-13-elite-tech-craft-fg"
    },
    {
      "id": 9,
      "name": "Nike Mercurial Superfly 7 Pro MDS FG",
      "brand": "NIKE",
      "gender": "MEN",
      "category": "FOOTBALL",
      "price": 137,
      "is_in_inventory": true,
      "items_left": 3,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg",
      "slug": "nike-mercurial-superfly-7-pro-mds-fg"
    },
    {
      "id": 10,
      "name": "Nike Air Force 1",
      "brand": "NIKE",
      "gender": "KIDS",
      "category": "CASUAL",
      "price": 90,
      "is_in_inventory": true,
      "items_left": 3,
      "imageURL": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/178b2a46-3ee4-492b-882e-f71efdd53a36/air-force-1-big-kids-shoe-2zqp8D.jpg",
      "slug": "nike-air-force-1"
    },
    {
      "id": 11,
      "name": "Nike Air Max 90",
      "brand": "NIKE",
      "gender": "KIDS",
      "category": "CASUAL",
      "price": 100,
      "is_in_inventory": true,
      "items_left": 3,
      "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
      "slug": "nike-air-max-90"
    }
  ]

  return (
    <>
      <div className='w-3/4 m-auto'>
        <div className='mt-20'>
          <Slider {...settings}>

            {data.map((d) => (
              <a key={d.id} href='#'>
                <div className='bg-white h-[450px] text-black rounded-xl ' key={d.id}>
                  <div className='h-56 rounded-t-xl bg-red-500 flex justify-center items-center hover:bg-blue-800'>
                    <img src={d.imageURL} className='h-44 w-44 rounded-full '></img>
                  </div>
                  <div className='flex flex-col justify-center items-center gap-4 p-4'>
                    <p className='text-sm font-bold'>{d.name}</p>
                    <p>{d.brand}</p>
                    <p>{d.category}</p>
                    <button className='bg-red-500 text-white text-l px-6 py-1 hover:bg-blue-800' onClick={() => dispatch({ type: 'ADD_TO_CART', payload: d })}>Add Cart</button>
                  </div>
                </div>
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Carousel