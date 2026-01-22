module.exports = {
    apps: [
        {
            name: "yanalshoubaki",
            script: "pnpm",
            args: ["run", "start"],
            env: {
                NODE_ENV: "production",
                PORT: 3002,
            },
        },
    ],
};
