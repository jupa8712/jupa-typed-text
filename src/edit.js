import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks, store as blockEditorStore } from '@wordpress/block-editor';
import { PanelBody, RangeControl, TextControl, ToggleControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
	const blockProps = useBlockProps();
	const { typeSpeed, startDelay, backSpeed, backDelay, showCursor, loop, smartBackspace, shuffle, clientid, onComplete } = attributes;

	// IDs de los demás bloques del post, para detectar colisiones al duplicar/pegar.
	const otherIds = useSelect((select) => {
		const { getClientIdsWithDescendants, getBlockAttributes } = select(blockEditorStore);
		return getClientIdsWithDescendants()
			.filter((id) => id !== clientId)
			.map((id) => getBlockAttributes(id)?.clientid)
			.filter(Boolean);
	}, [clientId]);

	useEffect(() => {
		// Solo (re)genera el id si está vacío (primera inserción) o colisiona
		// con otro bloque (duplicado/pegado), no en cada apertura del editor.
		if (!clientid || otherIds.includes(clientid)) {
			setAttributes({ clientid: `typed-${clientId}` });
		}
	}, [clientid, otherIds])

	const ALLOWED_BLOCKS = ['core/paragraph'];
	const MY_TEMPLATE = [
		['core/paragraph', { placeholder: __('Write text here', 'jupa-typed-text') }],
		['core/paragraph', { placeholder: __('Write text here', 'jupa-typed-text') }],
		['core/paragraph', { placeholder: __('Write text here', 'jupa-typed-text') }]
	];
	return (
		<div {...blockProps} >
			<InspectorControls>
				<PanelBody title={__('Options', 'jupa-typed-text')} initialOpen={true}>
					<RangeControl
						__next40pxDefaultSize
						label={__('Type Speed (milliseconds)', 'jupa-typed-text')}
						value={typeSpeed}
						onChange={(value) => setAttributes({
							typeSpeed: value
						})}
						min={0}
						max={500}
						step={10}
					/>
					<RangeControl
						__next40pxDefaultSize
						label={__('Back Speed (milliseconds)', 'jupa-typed-text')}
						value={backSpeed}
						onChange={(value) => setAttributes({
							backSpeed: value
						})}
						min={0}
						max={500}
						step={10}
					/>
					<RangeControl
						__next40pxDefaultSize
						label={__('Start Delay (milliseconds)', 'jupa-typed-text')}
						value={startDelay}
						onChange={(value) => setAttributes({
							startDelay: value
						})}
						min={0}
						max={10000}
						step={100}
					/>
					<RangeControl
						__next40pxDefaultSize
						label={__('Back Delay (milliseconds)', 'jupa-typed-text')}
						value={backDelay}
						onChange={(value) => setAttributes({
							backDelay: value
						})}
						min={0}
						max={10000}
						step={100}
					/>
					<ToggleControl
						label={__('Show Cursor', 'jupa-typed-text')}
						onChange={() => setAttributes({ showCursor: !showCursor })}
						checked={showCursor}
					/>
					<ToggleControl
						label={__('Loop', 'jupa-typed-text')}
						onChange={() => setAttributes({ loop: !loop })}
						checked={loop}
					/>
					<ToggleControl
						label={__('Smart Backspace', 'jupa-typed-text')}
						onChange={() => setAttributes({ smartBackspace: !smartBackspace })}
						checked={smartBackspace}
					/>
					<ToggleControl
						label={__('Shuffle', 'jupa-typed-text')}
						onChange={() => setAttributes({ shuffle: !shuffle })}
						checked={shuffle}
					/>
				</PanelBody>
				<PanelBody title={__('Callbacks', 'jupa-typed-text')} initialOpen={false}>
					<TextControl
						__next40pxDefaultSize
						label={__('On complete', 'jupa-typed-text')}
						value={onComplete}
						onChange={(value) => setAttributes({
							onComplete: value
						})}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="typed-strings">
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={MY_TEMPLATE}
				/>
			</div>
		</div >
	);
}
