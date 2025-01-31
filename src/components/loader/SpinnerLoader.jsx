import load_spinner from './load_spinner.gif';

function SpinnerLoader() {
    return (
    <div className='flex justify-center items-center h-screen'>
        <img src={load_spinner} alt="Loading..." />
    </div>
    )
}

export default SpinnerLoader;