<template>
  <div>
    <Introduction />
    <Vision />
    <Description />
    <CurrentProject />
    <Video />
    <PostScriptum />
  </div>
</template>

<script>
import Introduction from '../components/about_project/Introduction'
import Vision from '../components/about_project/Vision'
import Description from '../components/Description'
import CurrentProject from '../components/CurrentProject'
import Video from '../components/about_project/Video'
import PostScriptum from '../components/about_project/PostScriptum'
export default {
  name: 'About',
  components: { PostScriptum, Video, CurrentProject, Vision, Introduction, Description }
}
</script>

<style scoped>
</style>
