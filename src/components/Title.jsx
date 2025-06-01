export function Title({ children, style }) {
	return (
		<h3 style={{ styles, ...style }} role="heading" tabIndex={0}>
			{children}
		</h3>
	);
}

const styles = {
	fontWeight: 700,
	marginBottom: 32,
	color: 'var(--primary-color)',
	textAlign: 'left',
	textTransform: 'uppercase'
};
