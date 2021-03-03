import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {

    const { level } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Rodrigo-Taveira.png" alt="Rodrigo Taveira"/>
            <div>
                <strong>Rodrigo Taveira</strong>
                <p>
                    <img src="icons/level.svg"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}