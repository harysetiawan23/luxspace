import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Breadcrumb({ list }) { // props is deserialized to each value based on props definition below

  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {
            list?.map?.((input, index) => {
              const arias = index === list?.length ? { "aria-label": "current-page" } : {}
              return (
                <li key={input.url}>
                  <Link to={input.url} {...arias}>{input.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

Breadcrumb.propTypes = {
  list: PropTypes.array.isRequired
}