import { Icon } from '@iconify/react';
import '../../../styles/common/Style.css';
import styles from '../../../styles/study/detail/NumberOfPeople.module.css';

function NumberOfPeople({ peopleNumber }) {
    return (
        <div className={styles['container']}>
            <Icon icon="fluent:person-48-filled" fontSize="15" color='#52DD63' />
            <p>모집인원 : 19/{peopleNumber}</p>
        </div>
    )
}

export default NumberOfPeople;