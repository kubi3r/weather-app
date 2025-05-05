export default async function (icon) {
	const img = await import(`../icons/${icon}.svg`);
	document.querySelector('img').src = img.default;
}
