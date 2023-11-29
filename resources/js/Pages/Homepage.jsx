import NewsLists from '@/Components/Homepage/NewsList';
import Paginator from '@/Components/Homepage/paginator';
import Navbar from '@/Components/Navbar';
import { Link, Head } from '@inertiajs/react';
import React from 'react';

export default function Homepage(props) {
    return (
        <div className='min-h-screen bg-neutral-800 text-white text-2xl'>
            <Head title={props.title} />
            <Navbar user={props.auth.user}/>
            <div className='flex justify-center flex-col items-center lg:flex-row lg:flex-wrap lg:items-stretch gap-4 p-4'>
                <NewsLists news={props.news.data} />
            </div>
            <div className='flex justify-center items-center'>
                <Paginator meta={props.news.meta}/>
            </div>
        </div>
    );
}
