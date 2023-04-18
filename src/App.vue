<template>
  <RouterView/>
</template>

<script>

export default {
  name: 'App',

}
</script>


<style>
:root {
    --bs-primary: red !important;
}

</style>
<style lang="sass">
$primary: #4E2EE1
$primary-dark: #2E2cE1

.btn-primary
    background: $primary

    &:hover
        background: $primary-dark

.modal.show
    display: block

.fade
    background: #0003

h2
    margin-top: 20px

.color
    display: grid
    grid-template-columns: 15% 15% 1fr 1fr 15% 11%
    width: fit-content

    &__back
        grid-row: 1/4
        grid-column: 1/7

    &__element
        text-align: center
        vertical-align: middle
        cursor: pointer

        &#fender-back-left
            grid-row: 1/2
            grid-column: 2/3
            width: 100%
            height: 100px
            margin-top: 20px

        &#door-back-left
            grid-row: 1/2
            grid-column: 3/4
            width: 50%
            height: 50px
            margin-left: 35px
            place-self: center


        &#door-front-left
            grid-row: 1/2
            grid-column: 4/5
            width: 50%
            height: 50px
            margin-top: 40px

.btn

    &-delete
        width: 34px
        height: 34px

    svg
        width: 100%
        height: 100%

.loader-wrapper
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    display: grid
    place-content: center
    background-color: rgba(255, 255, 255, 70%)

.loader-container
    position: relative
    /* background: #f0f0f0 */
    width: 150px
    height: 25px

    span
        display: inline-block
        position: absolute
        top: 0
        left: 0
        background: #000
        width: 25px
        height: 25px
        border-radius: 50%
        opacity: 0
        animation: loader-anim forwards 2.5s infinite ease-in-out

        &:nth-child(2)
            animation-delay: 0.75s

        &:nth-child(3)
            animation-delay: 1.5s

@keyframes loader-anim
    0%
        transform: translateX(0)
        opacity: 0

    10%
        transform: translateX(0)
        opacity: 0.25
    25%, 75%
        opacity: 0.25
    50%
        opacity: 0.75
    90%
        transform: translateX(calc(150px - 25px))
        opacity: 0.25

    100%
        transform: translateX(calc(150px - 25px))
        opacity: 0

</style>