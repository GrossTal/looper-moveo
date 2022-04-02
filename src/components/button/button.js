import './button.css';
import clsx from 'clsx';

function Button({ onClick, title, className }) {
    return (
        <div className={clsx('button-container', className)} onClick={onClick}>
            <div className='button-title'>{title}</div>
        </div>
    )
}
export default Button