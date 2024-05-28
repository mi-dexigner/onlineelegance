import {ImageIcon} from '@sanity/icons'
import { defineField } from 'sanity'


export const slideType = defineField({
    name: 'slider',
  title: 'Sliders',
  type: 'document',
  icon: ImageIcon,
  fields:[
    defineField({
        name: 'title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
    defineField({
      title: "Text",
      name: "text",
      type: "text",
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        title: 'Feature Image',
  name: 'feature_image',
  type: 'image',
  options: {
    hotspot: true // <-- Defaults to false
  }
      }),
    defineField({
        name: 'date_added',
        title: 'Date Added',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
          calendarTodayLabel: 'Today'
        }
      }),
    defineField({
      name:"status",
      title:"Status",
      type:'string',
      initialValue:'enabled',
      options:{
          list:[
              {value:'enabled',title:"Enabled"},
              {value:'disabled',title:"Disabled"},
          ]
      }
      }),
  ]
})