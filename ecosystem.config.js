module.exports = {
    apps: [{
        name: 'szymon-portfolio',
        script: 'npm',
        args: 'start',
        cwd: '/var/www/szymon-portfolio',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'production',
            PORT: 3000
        },
        error_file: './logs/err.log',
        out_file: './logs/out.log',
        log_date_format: 'YYYY-MM-DD HH:mm Z'
    }]
}
