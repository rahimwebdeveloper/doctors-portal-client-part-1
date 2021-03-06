import React from 'react';

const Review = ({ review }) => {
    const { name, img, location } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas unde beatae in distinctio quod a? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nesciunt!</p>
                <div className='flex items-center mt-3'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100">
                            <img src={img} />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h3 className='text-2xl'>{name}</h3>
                        <h4 className='text-xl'>{location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;