import React from 'react';

export default function AdreesCard({ address }) {
  return (
    <div>
      <div className='space-y-3'>
        <p className='font-semibold'>{address.firstName}</p>
        {address ? (
          <>
            <p>
              {`${address.city}, ${address.state}, ${address.zipcode}`}
            </p>
            <div className='space-y-1'>
              <p className='font-semibold'>Phone Number</p>
              <p>{address.phonenumber}</p>
            </div>
          </>
        ) : (
          <p>No address found</p>
        )}
      </div>
    </div>
  );
}
