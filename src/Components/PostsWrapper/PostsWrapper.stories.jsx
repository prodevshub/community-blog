import React from 'react'
import PostsWrapper from './PostsWrapper'

export default {
    title: 'Posts Wrapper',
    component: PostsWrapper
}

const Template = ({
    display,
    gridTemplateColumns,
    columnGap,
    rowGap,
    textAlign,
    fontSize,
    color,
    height,
    width,
    margin,
    padding,
    position,
    objectFit,
    backgroundColor,
    fontFamily,
    overflow
}) => (
    <PostsWrapper
        {...{
            display,
            gridTemplateColumns,
            columnGap,
            rowGap,
            textAlign,
            fontSize,
            color,
            height,
            width,
            margin,
            padding,
            position,
            objectFit,
            backgroundColor,
            fontFamily,
            overflow
        }}
    />
)

export const PostLayoutWrapper = Template.bind({})
PostLayoutWrapper.args = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    height: '70vh',
    width: '96%',
    margin: '1% 2%',
    padding: '10px',
    columnGap: '1.4rem',
    rowGap: '1.4rem',
    backgroundColor: 'white'
}

export const InsideLayout = Template.bind({})
InsideLayout.args = {
    color: 'white',
    textAlign: 'left',
    fontSize: '2rem',
    height: '100%',
    width: '100%',
    margin: '0.5rem',
    padding: '0.5rem',
    position: 'absolute',
    objectFit: 'cover',
    backgroundColor: 'white',
    fontFamily: 'Bitter',
    overflow: 'hidden'
}

// const TemplateAspect1 = ({ backgroundColor, background }) => (
//     <PostsWrapper {...{ backgroundColor, background }}>
//         <div
//             className="postOne-wrapper"
//         >
//             {backgroundColor.background}
//             <a>{backgroundColor.backgroundColor}</a>
//         </div>
//     </PostsWrapper>
// )

// export const Custom = TemplateAspect1.bind({})
// Custom.args = {
//     backgroundColor: 'rgba(58, 93, 14, 0.5)',
//     background: 'white'
// }
// export const Custom1 = TemplateAspect1.bind({})
// Custom1.args = {
//     backgroundColor: 'white'
// }
// export const Image = Template.bind({})
// Image.args = {
//     objectFit: 'cover',
//     height: '100%',
//     width: '100%'
// }

// export const Name = Template.bind({})
// Name.args = {
//     position: 'absolute',
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     width: 'calc(100% - $s15 - $s15)',
//     fontFamily: 'Bitter',
//     fontSize: '2rem',
//     color: 'white',
//     padding: '1.5rem'
// }

// export const Title = Template.bind({})
// Title.args = {
//     overflow: 'hidden',
//     height: '25%',
//     margin: '0.5rem',
//     padding: '0.5rem',
//     fontFamily: 'Bitter',
//     fontSize: '2rem',
//     color: 'white'
// }

// export const Date = Template.bind({})
// Date.args = {
//     position: 'absolute',
//     height: '25%',
//     margin: '0.5rem',
//     padding: '0.5rem',
//     fontFamily: 'Bitter',
//     fontSize: '2rem',
//     color: 'white',
//     bottom: '0px'
// }

// export const Cover = Template.bind({})
// Cover.args = {
//     color: 'white',
//     textAlign: 'left',
//     fontSize: '2rem',
//     height: '100%',
//     width: '100%',
//     position: 'absolute',
//     backgroundColor: 'rgba(58, 93, 14, 0.5)',
//     fontFamily: 'Bitter'
// }
