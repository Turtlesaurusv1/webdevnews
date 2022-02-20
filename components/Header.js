import HeaderStyles from '../styles/Header.module.css'
const Header = () => {
  return (
    <div>
        <h1 className={HeaderStyles.title}>
            <span>webdev</span>News
        </h1>
        <p className={HeaderStyles.description}>Heep up to date with web devnewz</p>

    </div>
  )
}

export default Header