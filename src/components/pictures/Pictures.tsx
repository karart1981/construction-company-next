import React from 'react'
import Image from 'next/image'
import styles from './pictures.module.css';

const Pictures = () => {
  return (
    <div className="py-10 px-[60px] bg-[#d6d7d9]">
        <div className="flex flex-wrap justify-center items-center gap-[15px]">
            <div className="overflow-hidden">
                <Image
                    src="/projects-pictures/proj-image1.jpeg"
                    className={styles.projImg}
                    width={300}
                    height={250}
                    alt="Picture of the author"
                />
            </div>
            <div className="overflow-hidden">
                <Image
                    src="/projects-pictures/proj-image2.jpg"
                    className={styles.projImg}
                    width={300}
                    height={250}
                    alt="Picture of the author"
                />
            </div>
            <div className="overflow-hidden">
                <Image
                    src="/projects-pictures/proj-image3.jpg"
                    className={styles.projImg}
                    width={300}
                    height={250}
                    alt="Picture of the author"
                />
            </div>
            <div className="overflow-hidden">
                <Image
                    src="/projects-pictures/proj-image4.jpg"
                    className={styles.projImg}
                    width={300}
                    height={250}
                    alt="Picture of the author"
                />
            </div>
            <div className="overflow-hidden">
                <Image
                    src="/projects-pictures/proj-image5.jpg"
                    className={styles.projImg}
                    width={300}
                    height={250}
                    alt="Picture of the author"
                />
            </div>
            <div className="overflow-hidden">
                <Image
                    src="/projects-pictures/proj-image6.jpg"
                    className={styles.projImg}
                    width={300}
                    height={250}
                    alt="Picture of the author"
                />
            </div>
            <div className="overflow-hidden">
                <Image
                    src="/projects-pictures/proj-image7.jpg"
                    className={styles.projImg}
                    width={300}
                    height={250}
                    alt="Picture of the author"
                />
            </div>
            <div className="overflow-hidden">
                <Image
                    src="/projects-pictures/proj-image8.jpg"
                    className={styles.projImg}
                    width={300}
                    height={250}
                    alt="Picture of the author"
                />
            </div>
        </div>
    </div>
  )
}

export default Pictures