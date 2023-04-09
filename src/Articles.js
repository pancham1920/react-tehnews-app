import React from 'react'
import { useGlobalContext } from "./context";

const Articles = () => {
  const { isLoading, hits, removeStory } = useGlobalContext()

  if (isLoading) {
    return <div className='w-24 h-24 rounded-full animate-spin
    border border-solid border-sky-400 border-t-transparent ml-50 relative left-1/4 ml-10'></div>
  }
  return (
    <section className='w-11/12 max-w-screen-lg m-0 mb-12 grid gap-8'>
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story
        return (
          <article key={objectID} className='px-8 py-4 rounded-lg border-[2px] border-solid border-gray bg-white'>
            <h4 className='mb-0.5 leading-6 tracking-widest capitalize text-sm font-bold'>{title}</h4>
            <p className='mb-0.5 text-gray-500'>
              {points} points by <span>{author} | </span> {num_comments}{' '}
              comments
            </p>
            <div>
              <a
                href={url}
                className='mr-4 text-sm text-green-500 capitalize'
                target='_blank'
                rel='noopener noreferrer'
              >
                read more
              </a>
              <button
                className='mr-4 text-sm text-red-500 capitalize cursor-pointer border rounded-sm border-white-500'
                onClick={() => removeStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Articles
