import { PortableTextComponents } from '@portabletext/react';

export const components:PortableTextComponents ={
    block:{
        h3:({children})=><h3 className='text-blue-400 text-xl'>{children}</h3>
    }
}