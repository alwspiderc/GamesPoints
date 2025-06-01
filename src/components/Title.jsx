export function Title({ children }) {
	return <h3 style={styles}>{children}</h3>;
}

const styles = {
	fontWeight: 700,
	marginBottom: 32,
	color: 'var(--primary-color)',
	textAlign: 'left',
	textTransform: 'uppercase'
};
