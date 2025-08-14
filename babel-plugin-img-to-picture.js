module.exports = function ({ types: t }) {
	return {
		visitor: {
			JSXElement(path) {
				if (path.node.openingElement.name.name !== 'img') return;

				const imgElem = path.node;
				const imgAttrs = imgElem.openingElement.attributes;

				// Найти src
				const srcAttr = imgAttrs.find(attr => attr.name && attr.name.name === 'src');
				if (!srcAttr || !srcAttr.value) return;

				// Создать webp версию
				const srcWebp = t.jsxAttribute(
					t.jsxIdentifier('srcSet'),
					t.jsxExpressionContainer(
						t.binaryExpression(
							'+',
							srcAttr.value.expression,
							t.stringLiteral('?webp')
						)
					)
				);

				// Создать <source>
				const sourceElem = t.jsxElement(
					t.jsxOpeningElement(t.jsxIdentifier('source'), [
						srcWebp,
						t.jsxAttribute(t.jsxIdentifier('type'), t.stringLiteral('image/webp'))
					]),
					t.jsxClosingElement(t.jsxIdentifier('source')),
					[],
					true
				);

				// Создать <picture>
				const pictureElem = t.jsxElement(
					t.jsxOpeningElement(t.jsxIdentifier('picture'), []),
					t.jsxClosingElement(t.jsxIdentifier('picture')),
					[sourceElem, imgElem]
				);

				path.replaceWith(pictureElem);
			}
		}
	};
};
