
module.exports = ({ key }) => {
    return async (ctx, next) => {
        console.log(`------${key}------`);
        await next()
        if (ctx.status === 403 || ctx.status === 500) {
            await ctx.render('home/index', {
                title: ctx.status,
                user: 'rzx',
                token: ctx.cookies.get('token')
            })
        }
    };
};