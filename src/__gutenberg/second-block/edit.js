import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export const BlockEdit = (props) => {
    
    const blockProps = useBlockProps();
    
    return (
        <div {...blockProps}>
            <h4>{__('Second Block edit', 'wptboot')}</h4>
        </div>
    );
};
