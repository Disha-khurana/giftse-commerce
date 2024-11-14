import React from 'react';

function Data({ slug }) {
    const data = [
        { name: 'Disha', age: '20', designation: 'frontend developer', slug: 'disha' },
        { name: 'Himanshu', age: '22', designation: 'full stack developer', slug: 'himanshu' },
        { name: 'Kashish', age: '21', designation: 'frontend developer', slug: 'kashish' },
        { name: 'Diksha', age: '24', designation: 'SEO', slug: 'diksha' },
        { name: 'Vivek', age: '23', designation: 'full stack developer', slug: 'vivek' }
    ];

    // Filter data based on the slug prop
    const filteredData = data.filter((item) => item.slug === slug);

    return (
        <div>
            {filteredData.map((item, index) => (
                <div key={index}>
                    <h1>{item.name}</h1>
                    <span>{item.age}</span>
                </div>
            ))}
        </div>
    );
}

export default Data;
