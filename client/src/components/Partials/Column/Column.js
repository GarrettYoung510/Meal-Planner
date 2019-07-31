import React from 'react'

const Column = props => {
    return( 
        <div 
            className={
                'col-sm-' + 
                props.small +  
                ' col-md-' +
                props.medium + 
                ' col-lg-' + 
                props.large + 
                ' offset-sm-' + 
                props.offset_sm +
                ' offset-md-' + 
                props.offset_md +
                ' offset-lg-' + 
                props.offset_lg  
            }
        >
            {props.children}
        </div>
    )
}

export default Column
