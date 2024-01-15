import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import classes from "../modules/Contact.module.scss"
import layout from "../modules/Layout.module.scss"
import {Slide} from "react-awesome-reveal";


const Contact = () => {

    return <>
        <Header />
        <Slide>
            <section className={`${classes['contact-wrapper']} ${layout['container']}`}>

                <div className={classes['contact-header']}>
                    <h2>Contact Us</h2>
                </div>

                <div className={classes['contact-input-group']}>
                    <div className={classes['top-row']}>
                        <input type="text" placeholder={'Name'}/>
                        <input type="text" placeholder={'Email'}/>
                    </div>
                    <div className={classes['bottom-row']}>
                        <textarea name="" id="" rows="10" placeholder={'Message'}></textarea>
                    </div>
                </div>

                <button>Send</button>

            </section>
        </Slide>

        <Footer />
    </>
}

export default Contact;