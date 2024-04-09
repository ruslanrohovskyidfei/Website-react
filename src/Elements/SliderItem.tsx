import React from 'react'; // we need this to make JSX compile

type SliderItemProps = {
    title: string,
    img: string
}

export const SliderItem = ({ title, img }: SliderItemProps) => <aside>
    <h2>{ title }</h2>
    <p>
        <img src={ img } alt=""/>
    </p>
</aside>

const el = <Card title="Welcome!" img="To this example" />