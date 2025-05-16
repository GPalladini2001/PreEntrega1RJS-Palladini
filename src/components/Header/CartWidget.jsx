import styles from "./Header.module.css"

function CartWidget() {
  return (
    <div className={styles.cartWidget}>
      <p>
        <span> 🛒0</span>
      </p>
    </div>
  )
}

export default CartWidget