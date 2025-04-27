import style from './contact.module.css';
import { Link, Outlet } from 'react-router-dom';
import close from '../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg';

function Contact() {

    const currentYear = new Date().getFullYear();

    return (
        <div className={style.main_container}>
            <p className={style.head}>Ticket Malawi</p>
            <Link to='/'><img className={style.close} src={close} alt="Close" /></Link>
            <Outlet />

            <div className={style.contact_section}>
                <p className={style.title}>Contact Us</p>

                <div className={style.info_block}>
                    <p><strong>Phone:</strong> +265 98 112 84 39</p>
                    <p><strong>Email:</strong> ticketmalawi@gmail..com</p>
                    <p><strong>Address:</strong> Blantyre, Malawi</p>
                    <p><strong>Working Hours:</strong> Mon - Fri | 8:00 AM - 5:00 PM</p>
                </div>
            </div>

            <footer className={style.footer}>
                &copy; {currentYear} Ticket Malawi | <a href='/bluegalaxy' target="_blank" rel="noopener noreferrer">ticketmalawi/oasis.co</a>
            </footer>
        </div>
    );
}

export default Contact;
