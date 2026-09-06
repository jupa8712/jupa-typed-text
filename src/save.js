import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { clientid, typeSpeed, backSpeed, startDelay, backDelay, showCursor, loop, smartBackspace, shuffle, onComplete } = attributes;
	return (
		<div {...useBlockProps.save()} data-show-cursor={showCursor} >
			<div
				id={clientid}
				className="typed-strings"
				data-type-speed={typeSpeed}
				data-back-speed={backSpeed}
				data-start-delay={startDelay}
				data-back-delay={backDelay}
				data-loop={loop}
				data-smart-backspace={smartBackspace}
				data-shuffle={shuffle}
				data-on-complete={onComplete}
			>
				<InnerBlocks.Content />
			</div>
			<span className={clientid}></span>
		</div>
	);
}
