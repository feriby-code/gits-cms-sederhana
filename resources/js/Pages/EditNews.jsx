import Navbar from '@/Components/Navbar';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

export default function EditNews(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id, title, description, category
        }
        router.post('/news/update', data);
        setTitle('');
        setDescription('');
        setCategory('');
    }

    console.log('Props Edit News : ', props);

    return (
        <div className='min-h-screen bg-neutral-800 text-white text-2xl'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="card w-full lg:w-96 bg-base-100 shadow-xl m-2">
                <div className='p-4 text-2xl'>EDIT BERITA</div>
                <div className="card-body">
                    <input type="text" placeholder="Judul" className="m-2 input input-bordered w-full" onChange={(title) => setTitle(title.target.value)} defaultValue={props.myNews.title} />
                    <input type="text" className="m-2 input input-bordered w-full" onChange={(description) => setDescription(description.target.value)} defaultValue={props.myNews.description} />
                    <input type="text" placeholder="Kategori" className="m-2 input input-bordered w-full" onChange={(category) => setCategory(category.target.value)} defaultValue={props.myNews.category} />
                    <button className='btn btn-primary m-2' onClick={() => handleSubmit()}>UPDATE</button>
                </div>
            </div>
        </div>
    );
}
